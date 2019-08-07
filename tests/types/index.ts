// Test ReturnType
import { assert, IsExact } from "conditional-type-checks";

const a = () => ({ example: "example" });
assert<IsExact<ReturnType<typeof a>, { example: string; }>>(true);

