import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // get the body of the request
  const body = await request.json();

  // verify webhook
  // ...

  // revalidate the posts page (or an individual post page)
  revalidatePath("/posts");
}
