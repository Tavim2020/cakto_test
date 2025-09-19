import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    console.log("aqui o que será enviado para o backend", data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Ocorreu um erro ao finalizar o pagamento" },
      { status: 500 }
    );
  }
}
