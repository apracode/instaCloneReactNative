export const USER_FRAGMENT = `
        id
        name
        avatar
`;

export const COMMENT_FRAGMENT = `
        id
        text
        user{
            ${USER_FRAGMENT}
        }
`;

export const FILE_FRAGMENT = `
        id
        url
`;

export const FULLPOST_FRAGMENT = `
    fragment PostParts on Post {
        id
        caption
        location
        user{
            ${USER_FRAGMENT}
        }
        files{
           ${FILE_FRAGMENT}
        }
        likes{
            id
            user{
                ${USER_FRAGMENT}
            }
        }
        comments{
            ${COMMENT_FRAGMENT}
        }
        
    }
`;

export const ROOM_FRAGMENT = `
    fragment DirectParts on Direct {
        id
        participants{
            ${USER_FRAGMENT}
        }
        messagess{
            id
            text
            from{
                ${USER_FRAGMENT}
            }
            to{
                ${USER_FRAGMENT}
            }
        }
    }
`;
