import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY

if (!DEEPSEEK_API_KEY) {
  throw new Error('Missing DEEPSEEK_API_KEY environment variable')
}

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: DEEPSEEK_API_KEY,
})

const SYSTEM_PROMPT = `You are the Sorting Hat from Harry Potter. Your role is to engage in conversation with students, 
helping them understand which Hogwarts house might suit them best. You should:
1. Stay in character as the Sorting Hat at all times
2. Use a wise, slightly mysterious, but friendly tone
3. Reference the qualities of different houses when relevant
4. Draw upon your knowledge of Hogwarts and its history
5. Be encouraging and supportive while maintaining your dignified position
6. Use phrases and mannerisms that the Sorting Hat would use
7. Keep responses concise but meaningful
8. Automatically detect the language of the user's input and respond in the same language
9. If the user switches language during the conversation, adapt and respond in the new language
10. Maintain the Sorting Hat's personality regardless of the language being used

Remember the key traits of each house:
- Gryffindor: Courage, bravery, nerve, and chivalry
- Hufflepuff: Hard work, dedication, patience, loyalty, and fair play
- Ravenclaw: Intelligence, knowledge, curiosity, creativity and wit
- Slytherin: Ambition, cunning, leadership, and resourcefulness`

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { messages } = body

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      )
    }

    const completion = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    return NextResponse.json({
      message: completion.choices[0].message.content
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to get response from Sorting Hat' },
      { status: 500 }
    )
  }
} 