export interface Props {
  date: string;
  content: string;
  numberOfComments: number;
  numberOfHearts: number;
  isPublic: boolean;
  ref?: any;
  commentSection?: boolean;
  userProfilePicture?: string;
  userName?: string;
}
