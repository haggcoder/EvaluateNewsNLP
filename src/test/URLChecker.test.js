import { checkForURL } from '../client/js/URLChecker'

describe("Test: Input URL validator function", () => {
    let url = "https://www.foxnews.com/media/elon-musk-cnn-ventilators"
    test("This is a valid URL, should return true", async () => {
        const response = checkForURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});

describe("Test: Input URL validator function", () => {
    let url = "https ://www.foxn  ews.com media/elon-musk-cnn-ventilators"
    test("This is not a valid URL, should return false", async () => {
        const response = checkForURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});