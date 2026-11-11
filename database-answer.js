// ANSWER FILE. Try database-question.js first, then compare with this.
// Run this version with: node index.js answer

// Step 1: import mongoose.
import mongoose from "mongoose";

// Step 2: the connection URI. The last part (gym) is the database name.
const uri = "mongodb://127.0.0.1:27017/gym";

// Step 3: the schema lists the fields and their types.
const memberSchema = new mongoose.Schema({
  name: String,
  plan: String,
  city: String,
  visits: Number,
});

// The model "Member" is saved in the "members" collection.
const Member = mongoose.model("Member", memberSchema);

// Step 4: connect once when the server starts.
export async function connectDB() {
  await mongoose.connect(uri);
  console.log("Connected to MongoDB");
}

// find() with no filter returns every document.
export async function getAllMembers() {
  return await Member.find();
}

// Exact match: plan must equal the value sent from the page.
export async function findMembersByPlan(plan) {
  return await Member.find({ plan: plan });
}

// $gte means "greater than or equal to".
export async function findMembersByMinVisits(minVisits) {
  return await Member.find({ visits: { $gte: minVisits } });
}

// sort: -1 = highest first. limit(3) keeps the first 3.
export async function getTopThreeVisitors() {
  return await Member.find().sort({ visits: -1 }).limit(3);
}

// create() checks the data against the schema, saves it and returns the saved document.
export async function addMember(member) {
  return await Member.create(member);
}
