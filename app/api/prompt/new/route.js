import Prompt from "@models/prompt.model";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { userId, prompt, tag } = await request.json();
  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    console.log(error.message);
    return new Response(
      JSON.stringify({
        error: "Failed to create a new prompt",
      }),
      { status: 500 }
    );
  }
};
