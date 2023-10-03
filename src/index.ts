import { TCPConnection } from "./behavioral/state/TCPConnection";

const conn = new TCPConnection();

conn.acknowledge();

conn.close();

conn.close();

conn.open();
