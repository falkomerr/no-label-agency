import { Html } from "@react-email/html"
import { Text } from "@react-email/text"
import { Section } from "@react-email/section"
import { Container } from "@react-email/container"

export default function DataEmail({
  name,
  email,
  phone,
  approximateBudget,
  type,
  message,
                                  }: {
  name: string
  email: string
  phone: string
  approximateBudget: [number, number],
  type: string[],
  message: string
}) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={paragraph}>name: {name}</Text>
          <Text style={paragraph}>email: {email}</Text>
          <Text style={paragraph}>phone: {phone}</Text>
          <Text style={paragraph}>budget: {approximateBudget[0] + "-" + approximateBudget[1]}</Text>
          <Text style={paragraph}>type of project: {type.toString()}</Text>
          <Text style={paragraph}>message: {message}</Text>
        </Container>
      </Section>
    </Html>
  )
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
}

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
}

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
}