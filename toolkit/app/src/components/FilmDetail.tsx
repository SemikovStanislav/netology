import React from "react";
import { Card, Descriptions, Image, Spin, Typography } from "antd";
import type { IGetFilmDetail } from "../interfaces/films"; // путь подкорректируй

const { Title, Paragraph } = Typography;

interface IFilmDetailProps {
    data: IGetFilmDetail;
    loading: boolean;
}

const FilmDetail: React.FC<IFilmDetailProps> = ({ data, loading }) => {
    if (loading) {
        return (
            <div style={{ textAlign: "center", padding: "40px" }}>
                <Spin size="large" />
            </div>
        );
    }

    return (
        <Card style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
            <div style={{ display: "flex", gap: 24 }}>
                <Image
                    src={data.Poster}
                    alt={data.Title}
                    width={250}
                    style={{ objectFit: "cover", flexShrink: 0 }}
                    fallback="https://via.placeholder.com/250x370?text=No+Image"
                />
                <div style={{ flex: 1 }}>
                    <Title level={2}>{data.Title} ({data.Year})</Title>
                    <Paragraph>{data.Plot}</Paragraph>

                    <Descriptions
                        bordered
                        column={1}
                        size="middle"
                        labelStyle={{ width: 150 }}
                        style={{ marginTop: 16 }}
                    >
                        <Descriptions.Item label="Rated">{data.Rated}</Descriptions.Item>
                        <Descriptions.Item label="Released">{data.Released}</Descriptions.Item>
                        <Descriptions.Item label="Runtime">{data.Runtime}</Descriptions.Item>
                        <Descriptions.Item label="Genre">{data.Genre}</Descriptions.Item>
                        <Descriptions.Item label="Director">{data.Director}</Descriptions.Item>
                        <Descriptions.Item label="Writer">{data.Writer}</Descriptions.Item>
                        <Descriptions.Item label="Actors">{data.Actors}</Descriptions.Item>
                        <Descriptions.Item label="Language">{data.Language}</Descriptions.Item>
                        <Descriptions.Item label="Country">{data.Country}</Descriptions.Item>
                        <Descriptions.Item label="Awards">{data.Awards}</Descriptions.Item>
                        <Descriptions.Item label="Box Office">{data.BoxOffice}</Descriptions.Item>
                        <Descriptions.Item label="Metascore">{data.Metascore}</Descriptions.Item>
                        <Descriptions.Item label="IMDb Rating">{data.imdbRating}</Descriptions.Item>
                        <Descriptions.Item label="IMDb Votes">{data.imdbVotes}</Descriptions.Item>
                        <Descriptions.Item label="Type">{data.Type}</Descriptions.Item>
                        <Descriptions.Item label="DVD">{data.DVD}</Descriptions.Item>
                        <Descriptions.Item label="Ratings">
                            {data.Ratings.map((r, i) => (
                                <div key={i}>
                                    <strong>{r.Source}:</strong> {r.Value}
                                </div>
                            ))}
                        </Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        </Card>
    );
};

export default FilmDetail;
