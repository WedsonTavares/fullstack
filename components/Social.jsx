import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socials = [
    { Icon: <FaGithub />, path: 'https://github.com/WedsonTavares' },
    { Icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/wedsontavares/' }
]


export default function Social({ containerStyles, iconStyles }) {
    return <div className={containerStyles}>
        {socials.map((item, index) => (
            <Link key={index} href={item.path} className={iconStyles} target='_blank'>
                {item.Icon}
            </Link>
        ))}
    </div>
}
