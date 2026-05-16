import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema(
  {
    dataVersionID: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const RequestModel =
  mongoose.models.Request || mongoose.model("Request", RequestSchema);

export default RequestModel;
