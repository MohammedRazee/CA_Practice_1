// ==================================================================
// PRACTICE: write your answer in this file. Do not change any other file.
// Complete every function below. Each function must return its result.
// Stuck? Compare with database-answer.js, or run: node index.js answer
// ==================================================================


// Step 1: Import mongoose here.



// Step 2: Write your MongoDB connection URI here.
//         Database name: gym



// Step 3: Create the schema and the model here.
//         Model name: Member   (Mongoose saves it in the "members" collection)
//         Fields: name (String), plan (String), city (String), visits (Number)



// Step 4: Connect to MongoDB inside this function.
//         After connecting, print: Connected to MongoDB
export async function connectDB() {

}


// Return all the members in the collection.
export async function getAllMembers() {

}


// plan comes from the "Search by plan" box on the page, for example "Gold".
// Return the members whose plan matches it.
export async function findMembersByPlan(plan) {

}


// minVisits is a number typed on the page, for example 25.
// Return the members whose visits are greater than or equal to minVisits.
export async function findMembersByMinVisits(minVisits) {

}


// Return the 3 members with the most visits, highest first.
export async function getTopThreeVisitors() {

}


// member comes from the "Add Member" form, for example:
//   { name: "Riya", plan: "Basic", city: "Bengaluru", visits: 10 }
// Save it in the database and return the saved member.
export async function addMember(member) {

}
