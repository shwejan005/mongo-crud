import Topic from '@/models/topic';
import connectMongoDB from '@/libs/mongodb';
import { NextResponse } from 'next/server';

export async function POST (request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: `Topic created Title : ${title} Description : ${description}` }, { status: 201 });
}