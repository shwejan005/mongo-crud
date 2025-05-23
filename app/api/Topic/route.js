import Topic from '@/models/topic';
import connectMongoDB from '@/libs/mongodb';
import { NextResponse } from 'next/server';

export async function POST (request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: `Topic created Title : ${title} Description : ${description}` }, { status: 201 });
}

export async function GET () {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({topics}, {status: 200});
}

export async function DELETE (request) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: `Topic with ID: ${id} deleted successfully` }, { status: 200 });
}