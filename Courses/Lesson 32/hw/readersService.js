import { readersIntialData } from "./readersInitialData.js";

export class ReadersService {
    loadReaders() {
        return JSON.parse(readersIntialData);
    }
}