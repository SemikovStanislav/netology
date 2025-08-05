import React from "react";
import { Card, Descriptions, Image, Typography } from "antd";
import type {FilmDetail} from "../model";
import {FavoritesButton} from "../../../features/Favorites";
import {Spacer} from "../../../shared/ui/Spacer";
import {FALLBACK_URL} from "../../../shared/constants.ts";

const { Title, Paragraph } = Typography;

interface IFilmDetailProps {
    data: FilmDetail | null;
    loading?: boolean;
}

const FilmDetailCard: React.FC<IFilmDetailProps> = ({ data, loading }) => {
    return (
        <Card style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }} loading={loading}>
            {data ? (
                <div style={{ display: "flex", gap: 24 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Image
                            src={data.Poster}
                            alt={data.Title}
                            width={250}
                            style={{ objectFit: "cover", flexShrink: 0 }}
                            fallback={FALLBACK_URL}
                        />
                        <Spacer />
                        <FavoritesButton data={data} />
                    </div>
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
                            <Descriptions.Item label="Production">{data.Production}</Descriptions.Item>
                            <Descriptions.Item label="Website">{data.Website}</Descriptions.Item>
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
                ) : null}
        </Card>
    );
};

export default FilmDetailCard;
