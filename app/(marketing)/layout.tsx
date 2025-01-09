import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <header className="container z-40 bg-background">
                <div className="h-20 py-6">
                    <nav>
                        <Link
                            href={"/login"}
                            className={cn(
                                buttonVariants({variant:"secondary", size:"sm"}),
                                "px-4"
                            )}
                        >ログイン</Link>
                    </nav>
                </div>
            </header>
            <main>{children}</main>
        </div>
    );
}