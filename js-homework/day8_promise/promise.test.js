import { fetchPosts, fetchPostById, sequentialPromise } from "./promise";

describe("Promise", () => {
  describe("Fetch Posts", () => {
    const fakePosts = [
      {
        userId: 1,
        id: 1,
        title: "title1",
        body: "body1",
      },
      {
        userId: 2,
        id: 2,
        title: "title2",
        body: "body2",
      },
      {
        userId: 3,
        id: 3,
        title: "title3",
        body: "body3",
      },
    ];
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("fetchPosts should return posts", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(fakePosts),
        })
      );

      const posts = await fetchPosts();
      expect(posts).toEqual(fakePosts);

      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it("fetchPostById should return a post", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(fakePosts[0]),
        })
      );
      const post = await fetchPostById(1);
      expect(post).toEqual(fakePosts[0]);
    });
  });
});

describe("sequentialPromise", () => {
  it("should return the results in the order specified", async () => {
    const promises = [
      Promise.resolve("data1"),
      Promise.resolve("data2"),
      Promise.resolve("data3"),
    ];
    const order = [2, 1, 3];
    const results = await sequentialPromise(promises, order);
    expect(results).toEqual(["data2", "data1", "data3"]);
  });

  it("should throw an error if there is a rejected promise", async () => {
    const promises = [
      Promise.resolve("data1"),
      Promise.reject("error"),
      Promise.resolve("data3"),
    ];
    const order = [1, 2, 3];
    await expect(sequentialPromise(promises, order)).rejects.toEqual("error");
  });
});
