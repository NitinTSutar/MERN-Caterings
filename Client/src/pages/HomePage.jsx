import { useEffect } from "react";
import { useAppStore } from "../store/useAppStore";

const HomePage = () => {
  const { appName, health, fetchHealth } = useAppStore();

  useEffect(() => {
    fetchHealth();
  }, [fetchHealth]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">{appName}</h1>
      <p className="mt-2 text-slate-600">React + Tailwind + Axios + Zustand starter</p>

      <section className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold">API Health</h2>
        <p className="mt-2 text-slate-700">{health || "Checking server..."}</p>
      </section>
    </main>
  );
};

export default HomePage;
