import { z } from "zod";

export default z.object({
  name: z.string().min(2).max(50),
});
