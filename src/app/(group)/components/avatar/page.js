import ActiveAvatar from '@/components/Avatar/ActiveAvatar';
import AvatarWithAddIcon from '@/components/Avatar/AvatarWithAddIcon';
import AvatarWithEditIcon from '@/components/Avatar/AvatarWithEditIcon';
import AvatarWithFemaleGenderIcon from '@/components/Avatar/AvatarWithFemaleGenderIcon';
import AvatarWithMaleGenderIcon from '@/components/Avatar/AvatarWithMaleGenderIcon';
import CircleAvatar from '@/components/Avatar/CircleAvatar';
import DisableOfflineAvatar from '@/components/Avatar/DisableOfflineAvatar';
import SquareAvatar from '@/components/Avatar/SquareAvatar';
import { ComponentPortion } from '@/ui/componentPortion';

export const metadata = {
    title: 'Avatar Components',
    description: 'Avatar tailwind components'
};

const avatarArr = [
    {
        name: 'Square Avatar',
        Comp: SquareAvatar
    },
    {
        name: 'Circle Avatar',
        Comp: CircleAvatar
    },
    {
        name: 'Active Avatar',
        Comp: ActiveAvatar
    }
    // {
    //     name: 'Avatar with Edit Icon',
    //     Comp: AvatarWithEditIcon
    // },
    // {
    //     name: 'Avatar with add icon',
    //     Comp: AvatarWithAddIcon
    // },
    // {
    //     name: 'Disable Offline Avatar',
    //     Comp: DisableOfflineAvatar
    // },
    // {
    //     name: 'Avatar with male icon',
    //     Comp: AvatarWithMaleGenderIcon
    // },
    // {
    //     name: 'Avatar with female icon',
    //     Comp: AvatarWithFemaleGenderIcon
    // }
];

export default function Avatar() {
    return <ComponentPortion arr={avatarArr} />;
}
