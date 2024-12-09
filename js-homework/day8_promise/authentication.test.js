import {
  getUserByEmail,
  login,
  encodePassword,
  decodePassword,
  verifyPassword,
} from "./authentication";

describe("Authentication", () => {
  describe("password encode/decode", () => {
    it("should encode the password", () => {
      expect(encodePassword("password1")).toBe("1drowssapencoded");
    });
    it("should decode the password", () => {
      expect(decodePassword("1drowssapencoded")).toBe("password1");
    });
  });

  describe("getUserByEmail", () => {
    it("should return the user info by email ", async () => {
      const email = "leanne.graham@email.com";
      const expectedUser = {
        name: "Leanne Graham",
        username: "Bret",
        email: "leanne.graham@email.com",
        password: "1drowssapencoded",
      };

      const user = await getUserByEmail(email);
      expect(user).toEqual(expectedUser);
    });

    it("should throw an error if the user is not found", async () => {
      await expect(() =>
        getUserByEmail("john.smith@email.com")
      ).rejects.toThrow("User not found");
    });
  });

  describe("verify password", () => {
    it("should verify the password", async () => {
      const password = "password1";
      const encrypted = "1drowssapencoded";

      await expect(verifyPassword(password, encrypted)).resolves.not.toThrow();
    });

    it("should throw an error if the password is incorrect", async () => {
      const password = "password1";
      const encrypted = "2drowssapencoded";

      await expect(verifyPassword(password, encrypted)).rejects.toThrow(
        "Invalid password"
      );
    });
  });

  describe("login", () => {
    it("should login the user with email and password", async () => {
      const email = "leanne.graham@email.com";
      const password = "password1";
      const expectedUser = {
        name: "Leanne Graham",
        username: "Bret",
        email: "leanne.graham@email.com",
        token: "token",
      };
      const user = await login(email, password);
      expect(user).toEqual(expectedUser);
    });

    it("should return the error message if user does not exist", async () => {
      const email = "john.smith@email.com";
      const password = "password1";
      const expectedError = "User not found";
      const errorMessage = await login(email, password);
      expect(errorMessage).toBe(expectedError);
    });

    it("should return the error message if password is incorrect", async () => {
      const email = "leanne.graham@email.com";
      const password = "password2";
      const expectedError = "Invalid password";
      const errorMessage = await login(email, password);
      expect(errorMessage).toBe(expectedError);
    });
  });
});
