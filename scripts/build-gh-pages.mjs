import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const apiDir = path.join("src", "app", "api");
const backupDir = path.join(".gh-pages-api-backup");

function moveApiAside() {
  if (!fs.existsSync(apiDir)) return false;
  if (fs.existsSync(backupDir)) {
    fs.rmSync(backupDir, { recursive: true, force: true });
  }
  fs.renameSync(apiDir, backupDir);
  return true;
}

function restoreApi() {
  if (!fs.existsSync(backupDir)) return;
  if (fs.existsSync(apiDir)) {
    fs.rmSync(apiDir, { recursive: true, force: true });
  }
  fs.renameSync(backupDir, apiDir);
}

const moved = moveApiAside();
try {
  execSync("next build", {
    stdio: "inherit",
    env: {
      ...process.env,
      GITHUB_PAGES: "true",
      NEXT_PUBLIC_GITHUB_PAGES: "true",
    },
  });
} finally {
  if (moved) restoreApi();
}
