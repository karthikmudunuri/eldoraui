import ClerkOTP from "@/registry/eldoraui/clerk-otp"

export function ClerkOTPDemo2() {
  return (
    <ClerkOTP
      delay={3500} // Time interval (in ms) after which the OTP animation resets.
      cardTitle="Multifactor Authentication"
      cardDescription="Each user's self-serve multifactor settings are enforced automatically during sign-in."
      whileHover={false} // Normal animation behavior
    />
  )
}
