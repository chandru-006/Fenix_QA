function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`[ENV] Missing required variable: ${name}`);
  }
  return value;
}

module.exports = {
  WM_MARKETPLACE_USER: requireEnv('WM_MARKETPLACE_USER'),
  WM_MARKETPLACE_PASS: requireEnv('WM_MARKETPLACE_PASS'),
  WM_SSO_USER: requireEnv('WM_SSO_USER'),
  WM_SSO_PASS: requireEnv('WM_SSO_PASS')
};
