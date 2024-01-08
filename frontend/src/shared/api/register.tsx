import axios from "axios";

type CreateUserResponse = {
  name: string;
  job: string;
  id: string;
  createdAt: string;
};

async function createUser() {
  try {
    const { data, status } = await axios.post<CreateUserResponse>(
      "http://localhost:3000",
      { name: "John Smith", job: "manager" },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(JSON.stringify(data, null, 4));

    console.log(status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

createUser();
