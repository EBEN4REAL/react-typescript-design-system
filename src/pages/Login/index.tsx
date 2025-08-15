import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { httpClient } from "@/services/httpClient";
import { useToast } from "@/context/toastContext";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";

interface LoginResponse {
  token: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await httpClient.post<LoginResponse>("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("authToken", data.token);
      showToast("Logged in successfully", "success");
      navigate("/");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Login failed";
      showToast(message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
      <p className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <Button
          variant="secondary"
          size="sm"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
      </p>
    </div>
  );
}
