import{readersInitialData } from "../initialData/readersInitialData.js";

export class ReadersService {
    loadReaders() {
        return JSON.parse(readersInitialData);
    }
}