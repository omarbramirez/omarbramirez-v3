import type { NextConfig } from "next";
import createNextIntPuglin from 'next-intl/plugin'

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntPuglin()

export default withNextIntl(nextConfig);
