"use client";

import {
  Button,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

export default function EventRegistrationForm() {
  return (
    <form className="space-y-4 max-w-md mt-6">
      <Typography variant="h6">
        Register for this Event
      </Typography>

      <Input label="Full Name" required />
      <Input label="Email Address" type="email" required />
      <Input label="Phone Number" />
      <Textarea label="Questions or Expectations" />

      <Button type="submit" className="btn-primary">
        Submit Registration
      </Button>
    </form>
  );
}
