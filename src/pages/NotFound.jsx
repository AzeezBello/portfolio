import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { pageMeta } from "@/constants";
import { styles } from "@/styles";

const NotFound = () => {
  return (
    <section className={`${styles.paddingX} mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center pt-28 text-center`}>
      <Seo meta={pageMeta.notFound} />
      <p className={styles.sectionSubText}>404</p>
      <h1 className={styles.sectionHeadText}>Page not found</h1>
      <p className="mt-4 text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-8 flex flex-col gap-3 xs:flex-row">
        <Button asChild size="lg">
          <Link to="/">Back to home</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/projects">See projects</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
