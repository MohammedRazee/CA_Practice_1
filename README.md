# CA Lab Practice - Set 1

**Gym Member Register**

## Your task

The web page and the Express server are ready. The database part is missing. Complete it using Mongoose.

- Write your answer in **database-question.js**. The comments in it tell you what to write.
- Do not change any other file.
- The answer is in **database-answer.js**. Try on your own first.

## Steps

1. Open this project folder in VS Code and open a terminal in it.
2. Install the packages:

   ```
   npm install
   npm install mongoose
   ```

3. Make sure MongoDB is running, then add the sample data (see below).
4. Complete **database-question.js**.
5. Start the server:

   ```
   node index.js
   ```

6. Open **http://localhost:3000** in your browser.

After every change to database-question.js, stop the server with Ctrl + C and start it again.

To run the answer instead, start the server with: **node index.js answer**

## Database details

- **Database:** gym
- **Collection:** members
- **Fields:** name (text), plan (text), city (text), visits (number)

## Sample data

Open mongosh, paste these commands and press Enter. Paste them only once.

```
use gym
db.members.insertMany([
  { name: "Ajay", plan: "Basic", city: "Bengaluru", visits: 12 },
  { name: "Bhavna", plan: "Gold", city: "Mysuru", visits: 25 },
  { name: "Charan", plan: "Platinum", city: "Bengaluru", visits: 31 },
  { name: "Divya", plan: "Basic", city: "Mangaluru", visits: 8 },
  { name: "Esha", plan: "Gold", city: "Hubballi", visits: 19 },
  { name: "Gopal", plan: "Platinum", city: "Mysuru", visits: 27 },
  { name: "Hema", plan: "Basic", city: "Bengaluru", visits: 22 },
  { name: "Jayant", plan: "Gold", city: "Mangaluru", visits: 14 },
  { name: "Kiran", plan: "Platinum", city: "Hubballi", visits: 35 },
  { name: "Leela", plan: "Basic", city: "Mysuru", visits: 6 },
  { name: "Mohan", plan: "Gold", city: "Bengaluru", visits: 28 },
  { name: "Nisha", plan: "Platinum", city: "Mangaluru", visits: 17 }
])
```

## Expected output

1. **Terminal.** Run node index.js.  
   Expected: Connected to MongoDB, then Server running at http://localhost:3000
2. **Show all.** Click "Show All Members".  
   Expected: 12 members.
3. **Search.** Choose Gold and click Search.  
   Expected: 4 members: Bhavna, Esha, Jayant, Mohan.
4. **Filter.** Type 25 in "Visits at least" and click Filter.  
   Expected: 5 members: Bhavna, Charan, Gopal, Kiran, Mohan.
5. **Top 3 Visitors.** Click "Top 3 Visitors".  
   Expected: Kiran (35), Charan (31), Mohan (28), in this order.
6. **Add Member.** Fill the form with Name: your own name, Plan: Basic, City: Bengaluru, Visits: 10. Click "Add Member".  
   Expected: The message "Member saved" appears and the list shows 13 members, including your name.
