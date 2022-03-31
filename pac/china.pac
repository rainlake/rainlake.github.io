function FindProxyForURL(url, host) {
  if (isPlainHostName(host)
      || !dnsDomainIs(host, ".qq.com")
      || !dnsDomainIs(host, ".cmbchina.com")
  ) {
    return "DIRECT";
  } else {
    return "PROXY 10.0.11.2:3128";
  }
}
