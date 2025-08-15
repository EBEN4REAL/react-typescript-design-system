import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { httpClient } from "@/services/httpClient";
import { useToast } from "@/context/toastContext";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";

interface SignUpResponse {
  id: string;
  name: string;
  email: string;
}

export default function SignUpPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirm) {
      showToast("Passwords do not match", "error");
      return;
    }
    setLoading(true);
    try {
      await httpClient.post<SignUpResponse>("/auth/signup", {
        name,
        email,
        password,
      });
      showToast("Account created! Please log in.", "success");
      navigate("/login");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Sign up failed";
      showToast(message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextInput
          label="Confirm Password"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </Button>
      </form>
      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Button
          variant="secondary"
          size="sm"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </p>
    </div>
  );
}
