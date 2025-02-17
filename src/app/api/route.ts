import { render } from '@react-email/render';
import { sendEmail } from '@/lib/email';
import DataEmail from '@/emails/data';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const bodyData = await req.json();
    console.log(bodyData);

    const data = await sendEmail({
      to: 'mailbox@nlagency.ru',
      subject: 'Contact Us Submitted',
      html: await render(
        DataEmail({
          name: bodyData.name,
          email: bodyData.email,
          phone: bodyData.phone,
          message: bodyData.message,
          type: bodyData.type,
          approximateBudget: bodyData.budget,
        }),
      ),
    });

    console.log(data);

    return res.json();
  } catch (error) {
    console.log(error);

    return res.json();
  }
}
