import { NextResponse } from 'next/server';
import { dbConnection } from '../dbconnection';
import User from '../Model/user.model';

// Handler function for the GET method
export async function GET(req) {
  try {
    await dbConnection(); // Ensuring the database is connected
    console.log('MongoDb connected');
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({ message: 'Database connection error', error }, { status: 500 });
  }

  try {
    // Fetching unique company names from the database
    const users = await User.distinct('companyName'); // Using distinct to get unique company names
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching company names:", error);
    return NextResponse.json({ message: 'Error fetching company names', error }, { status: 500 });
  }
}