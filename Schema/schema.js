import mongoose from "mongoose"

const {Schema,model}=mongoose

const Scheme = Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
});

const Model=model("Details",Scheme)
export default Model 