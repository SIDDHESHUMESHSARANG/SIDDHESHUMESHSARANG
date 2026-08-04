"use client";
import {
  useEffect,
  useRef,
  useState,
  createElement,
  useMemo,
  useCallback,
} from "react";
import { gsap } from "gsap";

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text],
  );

  const initialVisibleChars = 3;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const [displayedText, setDisplayedText] = useState(() => {
    const firstText = textArray[0] || "";
    return reverseMode
      ? firstText.split("").reverse().join("").slice(0, initialVisibleChars)
      : firstText.slice(0, initialVisibleChars);
  });

  const [currentCharIndex, setCurrentCharIndex] = useState(initialVisibleChars);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [typingStarted, setTypingStarted] = useState(false);

  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  // Dynamic Tailwind text colors fallback logic
  const getCurrentTextColorClass = () => {
    if (textColors.length === 0) return "text-primary"; // Defaults cleanly to your primary class
    return textColors[currentTextIndex % textColors.length];
  };

  // Intersection Observer
  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  // GSAP Cursor Animation
  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      const animation = gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
      return () => animation.kill();
    }
  }, [showCursor, cursorBlinkDuration]);

  // Unified Typing Loop Engine
  useEffect(() => {
    if (!isVisible) return;
    let timeout;
    const currentText = textArray[currentTextIndex];

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText.length <= initialVisibleChars) {
          if (!loop && currentTextIndex === textArray.length - 1) {
            return;
          }

          setIsDeleting(false);
          setTypingStarted(false);
          setCurrentCharIndex(initialVisibleChars);

          const nextTextIndex = (currentTextIndex + 1) % textArray.length;
          const nextText = textArray[nextTextIndex];
          setDisplayedText(
            reverseMode
              ? nextText
                  .split("")
                  .reverse()
                  .join("")
                  .slice(0, initialVisibleChars)
              : nextText.slice(0, initialVisibleChars),
          );

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }
          setCurrentTextIndex(nextTextIndex);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) =>
              reverseMode ? prev.slice(1) : prev.slice(0, -1),
            );
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < currentText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText((prev) => {
                const nextChar =
                  currentText[
                    reverseMode
                      ? currentText.length - 1 - currentCharIndex
                      : currentCharIndex
                  ];
                return reverseMode ? nextChar + prev : prev + nextChar;
              });
              setCurrentCharIndex((prev) => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed,
          );
        } else {
          if (!loop && currentTextIndex === textArray.length - 1) return;

          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (
      !typingStarted &&
      currentCharIndex === initialVisibleChars &&
      !isDeleting &&
      displayedText.length === initialVisibleChars
    ) {
      timeout = setTimeout(() => {
        setTypingStarted(true);
      }, initialDelay);
    } else if (typingStarted) {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
    typingStarted,
    getRandomSpeed,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      // Removed old hardcoded 'text-violet-700' layout class completely
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    <span className={`inline-flex items-center ${getCurrentTextColorClass()}`}>
      <span className="whitespace-pre-wrap">{displayedText}</span>
      {showCursor && (
        <span
          ref={cursorRef}
          className={`inline-block opacity-100 ${shouldHideCursor ? "hidden" : ""} ${cursorClassName}`}
          style={{ marginLeft: displayedText ? "0.1em" : 0 }}
        >
          {cursorCharacter}
        </span>
      )}
    </span>,
  );
};

export default TextType;
