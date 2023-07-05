import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt.model";

export async function GET(request) {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");
    console.log(prompts);
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    console.log(error.message);
    return new Response("Failed to fetch prompts", {
      status: 500,
    });
  }
}
