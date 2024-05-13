import { z } from "zod";
import { OrderSchema } from "../schema/OrderSchema";
export type Order = z.infer<typeof OrderSchema>;
