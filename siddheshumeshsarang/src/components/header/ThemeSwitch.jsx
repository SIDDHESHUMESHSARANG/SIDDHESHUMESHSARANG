import React from 'react';
import styled from 'styled-components';

const ThemeSwitch = ({ isDark, onToggle }) => {
  return (
    <StyledWrapper>
      <label className="theme">
        <input
          className="input"
          type="checkbox"
          checked={isDark}
          onChange={onToggle}
        />
        <svg width={24} viewBox="0 0 24 24" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height={24} fill="none" className="icon icon-sun"><circle r={5} cy={12} cx={12} /><line y2={3} y1={1} x2={12} x1={12} /><line y2={23} y1={21} x2={12} x1={12} /><line y2="5.64" y1="4.22" x2="5.64" x1="4.22" /><line y2="19.78" y1="18.36" x2="19.78" x1="18.36" /><line y2={12} y1={12} x2={3} x1={1} /><line y2={12} y1={12} x2={23} x1={21} /><line y2="18.36" y1="19.78" x2="5.64" x1="4.22" /><line y2="4.22" y1="5.64" x2="19.78" x1="18.36" /></svg>
        <svg viewBox="0 0 24 24" className="icon icon-moon"><path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z" /></svg>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .theme {
    --bg-color: #fff;
    --main-color: #323232;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: var(--bg-color);
    border-radius: 100%;
    border: 2px solid var(--main-color);
  }

  .input {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0;
  }

  .icon {
    position: absolute;
    top: calc(50% -13px);
    left: calc(50% -13px);
    width: 26px;
    height: 26px;
  }

  .icon.icon-moon {
    fill: var(--main-color);
  }

  .icon.icon-sun {
    stroke: var(--main-color);
    display: none;
  }

  .input:checked ~ .icon.icon-sun {
    display: block;
  }

  .input:checked ~ .icon.icon-moon {
    display: none;
  }

  .theme:active {
    box-shadow: 0px 0px var(--main-color);
  }`;

export default ThemeSwitch;
