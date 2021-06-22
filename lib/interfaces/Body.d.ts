export default interface Body {
    push_data: {
        pushed_at: number;
        images: Array<any>;
        ag: string;
        pusher: string;
    };
    callback_url: string;
    repository: {
        status: string;
        description: string;
        is_trusted: Boolean;
        full_description: string;
        repo_url: string;
        owner: string;
        is_official: Boolean;
        is_private: Boolean;
        name: string;
        namespace: string;
        star_count: number;
        comment_count: number;
        date_created: number;
        repo_name: string;
    };
}
