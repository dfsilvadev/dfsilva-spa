import { LinkSimple } from "phosphor-react";
import Flex from "../flex";
import Heading from "../heading";
import { SOCIAL_URLS } from "@/lib/constants/social";

const links = [
  { label: "ig", url: SOCIAL_URLS.INSTAGRAM, title: "Instagram" },
  { label: "lk", url: SOCIAL_URLS.LINKEDIN, title: "LinkedIn" },
  { label: "gh", url: SOCIAL_URLS.GITHUB, title: "Github" },
  { label: "tw", url: SOCIAL_URLS.TWITTER, title: "Twitter" },
] as const;

export default function SocialMedia() {
  return (
    <Flex align="center" gap="1.6rem">
      <Flex align="center" gap="0.8rem">
        <LinkSimple size={20} weight="regular" aria-hidden />
        <Heading
          as="span"
          size="small"
          textColor="gray"
          weight="semibold"
          className="lessThan"
        >
          siga-me:
        </Heading>
        <Heading
          as="span"
          size="small"
          textColor="gray"
          weight="semibold"
          className="greaterThan"
        >
          siga-me nas redes sociais:
        </Heading>
      </Flex>

      {links.map(({ label, url, title }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
        >
          <Heading as="span" size="small" textColor="gray" weight="semibold">
            {label}
          </Heading>
        </a>
      ))}
    </Flex>
  );
}
