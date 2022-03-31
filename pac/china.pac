function FindProxyForURL(url, host) {
  if (!isPlainHostName(host)
      || dnsDomainIs(host, ".qq.com")
      || dnsDomainIs(host, ".cmbchina.com")
      || dnsDomainIs(host, ".icbc.com.cn")
  ) {
    return "PROXY 10.0.11.2:3128";
  } else {
    return "DIRECT";
  }
}
