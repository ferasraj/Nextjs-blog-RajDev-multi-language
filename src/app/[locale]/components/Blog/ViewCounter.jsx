"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const t = useTranslations("Views");
  const hasViewed = useRef(false);

  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      if (hasViewed.current || noCount) return;
      hasViewed.current = true;
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });

        if (error) {
          console.error(
            "Error incrementing view count inside try block:",
            error
          );
        }
      } catch (error) {
        console.error(
          "An error occurred while incrementing the view count:",
          error
        );
      }
    };

    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from("views")
          .select("count")
          .match({ slug: slug })
          .single();

        if (error) {
          console.error(
            "Error incrementing view count inside try block:",
            error
          );
        }

        setViews(data ? data.count : 0);
      } catch (error) {
        console.error(
          "An error occurred while incrementing the view count:",
          error
        );
      }
    };

    getViews();
  }, [slug]);

  if (showCount) {
    return (
      <div>
        {views} {t("views")}
      </div>
    );
  } else {
    return null;
  }
};

export default ViewCounter;
