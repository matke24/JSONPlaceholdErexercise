async function fetchInitialData(path: string) {
  try {
    const responsePosts = await fetch(`${path}`);
    const data = await responsePosts.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
export async function fetchPosts(path: string): Promise<
  {
    id: number;
    userId: number;
    title: string;
    body: string;
  }[]
> {
  try {
    const data = await fetchInitialData(path);
    return data;
  } catch (err) {
    throw err;
  }
}

// export async function fetchPosts(path: string): Promise<{
//   [postId: number]: { userId: number; title: string; body: string };
// }> {
//   try {
//     const data = await fetchInitialData(`${path}`);

//     const postMap: {
//       [postId: number]: { userId: number; title: string; body: string };
//     } = [];
//     data.forEach(
//       (post: { id: number; userId: number; title: string; body: string }) => {
//         postMap[post.id] = {
//           userId: post.userId,
//           title: post.title,
//           body: post.body,
//         };
//       }
//     );
//     return postMap;
//   } catch (err) {
//     throw err;
//   }
// }

export async function fetchUsers(
  path: string
): Promise<{ [userId: number]: string }> {
  try {
    const response = await fetch(`${path}`);
    const dataUsers = await response.json();

    const userMap: { [userId: number]: string } = {};
    dataUsers.forEach((user: { id: number; username: string }) => {
      userMap[user.id] = user.username;
    });

    return userMap;
  } catch (err) {
    throw err;
  }
}

export async function fetchComments(postId: number) {
  try {
    const responseComment = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    const data = await responseComment.json();
    return data;
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
}
// async function fetchData() {
//     try {
//       const responsePosts = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const responseUsers = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       const dataPosts = await responsePosts.json();
//       const dataUsers = await responseUsers.json();

//       const newUserMap: { [id: number]: string } = {};
//       const newPostMap: {
//         [postId: number]: { userId: number; title: string; body: string };
//       } = {};

//       dataPosts.forEach(
//         (post: {
//           id: number;
//           userId: number;
//           title: string;
//           body: string;
//         }) => {
//           newPostMap[post.id] = {
//             userId: post.userId,
//             title: post.title,
//             body: post.body,
//           };
//         }
//       );

//       dataUsers.forEach((user: { id: number; username: string }) => {
//         newUserMap[user.id] = user.username;
//       });

//       setPostList(newPostMap);
//       setUserMap(newUserMap);
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   //fetchData();
