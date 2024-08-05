import test from "ava";
import { get, getValue } from "../index";

// Check if the LOCAL_TEST environment variable is set
const isLocalTest = process.env.LOCAL_TEST;

if (isLocalTest) {
  test("get() should return a string that starts with '.ROBLOSECURITY=_|WARNING'", t => {
    t.true(get().trim().startsWith(".ROBLOSECURITY=_|WARNING"));
  });

  test("getValue() should return a string that starts with '_|WARNING'", t => {
    t.true(getValue().trim().startsWith("_|WARNING"));
  });
} else {
  console.log("Skipping tests that require local environment.");
}