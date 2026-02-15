import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { join } from 'path';

import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {

    constructor() {
        let adapter;

        if (process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('postgres')) {
            console.log('📂 Using PostgreSQL adapter');
            const pool = new Pool({ connectionString: process.env.DATABASE_URL });
            adapter = new PrismaPg(pool);
        } else {
            const dbPath = join(process.cwd(), 'dev.db');
            console.log('📂 Using SQLite adapter. Database path:', dbPath);
            adapter = new PrismaBetterSqlite3({ url: dbPath });
        }

        super({ adapter } as any);
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}