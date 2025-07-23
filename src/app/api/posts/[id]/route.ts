

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();

  const res = await fetch(`${process.env.API_URL}/posts/${params.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.API_URL}/posts/${params.id}`, {
    method: "DELETE",
  });

  return new Response(null, { status: res.status });
}
