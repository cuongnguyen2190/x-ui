FROM golang:1.17.2-alpine3.14 as builder

RUN apk add git build-base

RUN cd /go && \
    git clone https://github.com/cuongnguyen2190/x-ui.git && \
    cd x-ui && \
    go install && \
    go build -o x-ui

FROM alpine:latest  
RUN apk --no-cache add ca-certificates tzdata
WORKDIR /root/
RUN mkdir bin

COPY --from=builder /go/x-ui/x-ui .
COPY --from=builder /go/x-ui/bin/geoip.dat bin/
COPY --from=builder /go/x-ui/bin/geosite.dat bin/
COPY --from=builder /go/x-ui/bin/xray-linux-arm64 bin/

RUN chmod +x x-ui

EXPOSE 54321

CMD ["/root/x-ui"]  