export interface Post {
    id: number;
    title: string;
    body: string;
}
export interface PostsPutPostDTO extends Omit<Post, 'id'> {
    id?: number;
}

export interface CommentDTO {
    postId: number;
    body: string;
}
export interface Comment {
    id: number;
    postId: number;
    body: string;
}

export interface RetrievedPost {
    id: number;
    title: string;
    body: string;
    comments: Comment[];
}
