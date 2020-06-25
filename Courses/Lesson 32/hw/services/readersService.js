import{readersInitialData } from "../initialData/readersInitialData";

export class ReadersService {
    loadReaders() {
        return JSON.parse(readersInitialData);
    }
}